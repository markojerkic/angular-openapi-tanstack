import { Component, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  injectQuery,
  injectQueryClient,
} from '@tanstack/angular-query-experimental';
import { findPetsByStatus } from '../client';
import {
  getPetByIdOptions,
  getPetByIdQueryKey,
} from '../client/@tanstack/angular-query-experimental.gen';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JsonPipe],
  template: `
    @if (data.data(); as pet) {
      <pre>{{ pet | json }}</pre>
    }

    <button (click)="revalidate()">Refetch</button>
  `,

  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'open-api-angular-tanstack';

  public queryClient = injectQueryClient();

  private petId = Math.floor(Math.random() * (10 - 1 + 1) + 1);

  public data = injectQuery(() => ({
    ...getPetByIdOptions({
      path: {
        petId: this.petId,
      },
    }),
  }));

  public revalidate() {
    const qk = getPetByIdQueryKey({
      path: {
        petId: this.petId,
      },
    });
    this.queryClient.invalidateQueries({
      queryKey: qk,
    });
  }
}
