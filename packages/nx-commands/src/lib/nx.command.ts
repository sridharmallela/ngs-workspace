import type { ProjectConfiguration } from '@nx/devkit';
import { execSync } from 'node:child_process';
import { info } from 'node:console';

export abstract class NxCommands {
  static async getAffected(dest: string): Promise<string[]> {
    const affected = execSync(
      `nx show projects --affected --base=origin/${dest}`
    )
      .toString()
      .trim()
      .split('\n')
      .filter(project => project !== null && project.length !== 0);
    info(`\n\t\tAffected projects Count: ${affected.length}\n`);
    return affected;
  }

  static getProjectsWithTask(executionTask: string): string[] {
    return execSync(`nx show projects --with-target ${executionTask}`)
      .toString()
      .trim()
      .split('\n');
  }

  static getProjectInfo(project: string): ProjectConfiguration {
    return JSON.parse(
      execSync(`nx show project ${project} --json`).toString().trim()
    );
  }
}
