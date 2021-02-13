import { JsonController, Get } from 'routing-controllers';

import { HealthCheckDTO } from '../../dtos';

@JsonController('/api/v1/healthCheck')
export class HealthCheckController {
  @Get()
  healthCheck(): HealthCheckDTO {
    // TODO: Implement proper healthcheck
    return { status: 'healthy' };
  }
}
