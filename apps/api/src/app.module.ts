import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { VehiclesModule } from './modules/vehicles/vehicles.module';
import { BookingsModule } from './modules/bookings/bookings.module';
import { ContractsModule } from './modules/contracts/contracts.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { CrmModule } from './modules/crm/crm.module';
import { AiModule } from './modules/ai/ai.module';
import { IntegrationsModule } from './modules/integrations/integrations.module';
import { ReportsModule } from './modules/reports/reports.module';
import { AuditModule } from './modules/audit/audit.module';
import { MapsModule } from './modules/maps/maps.module';
import { CustomersModule } from './modules/customers/customers.module';
import { BranchesModule } from './modules/branches/branches.module';
import { InvoicesModule } from './modules/invoices/invoices.module';
import { MaintenanceModule } from './modules/maintenance/maintenance.module';
import { ViolationsModule } from './modules/violations/violations.module';
import { PromotionsModule } from './modules/promotions/promotions.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { LoyaltyModule } from './modules/loyalty/loyalty.module';
import { SettingsModule } from './modules/settings/settings.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    VehiclesModule,
    BookingsModule,
    ContractsModule,
    PaymentsModule,
    CrmModule,
    AiModule,
    IntegrationsModule,
    ReportsModule,
    AuditModule,
    MapsModule,
    CustomersModule,
    BranchesModule,
    InvoicesModule,
    MaintenanceModule,
    ViolationsModule,
    PromotionsModule,
    NotificationsModule,
    LoyaltyModule,
    SettingsModule
  ]
})
export class AppModule {}
