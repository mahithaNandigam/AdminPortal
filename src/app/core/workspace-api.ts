import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface WorkspaceHealth {
  status: 'operational';
  region: string;
  checkedAt: string;
}

@Injectable({ providedIn: 'root' })
export class WorkspaceApi {
  private readonly http = inject(HttpClient);

  getHealth(): Observable<WorkspaceHealth> {
    return this.http.get<WorkspaceHealth>('/api/workspace/health');
  }
}