import { Queue } from '@internal/queue'
import {
  ObjectAdminDelete,
  Webhook,
  RunMigrationsOnTenants,
  BackupObjectEvent,
  ResetMigrationsOnTenant,
  JwksCreateSigningSecret,
} from './index'

export function registerWorkers() {
  Queue.register(Webhook)
  Queue.register(ObjectAdminDelete)
  Queue.register(RunMigrationsOnTenants)
  Queue.register(BackupObjectEvent)
  Queue.register(ResetMigrationsOnTenant)
  Queue.register(JwksCreateSigningSecret)
}
