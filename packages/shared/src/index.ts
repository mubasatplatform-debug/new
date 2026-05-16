export type ID = string;

export type VehicleStatus =
  | 'AVAILABLE'
  | 'RESERVED'
  | 'RENTED'
  | 'MAINTENANCE'
  | 'CLEANING'
  | 'BLOCKED'
  | 'OVERDUE';

export type BookingStatus =
  | 'DRAFT'
  | 'PENDING_CUSTOMER_INFO'
  | 'PENDING_VERIFICATION'
  | 'PENDING_PAYMENT'
  | 'CONFIRMED'
  | 'CANCELLED'
  | 'EXPIRED'
  | 'CONVERTED_TO_CONTRACT';

export type ContractStatus =
  | 'DRAFT'
  | 'ACTIVE'
  | 'EXTENSION_REQUESTED'
  | 'OVERDUE'
  | 'RETURN_IN_PROGRESS'
  | 'CLOSED'
  | 'DISPUTED'
  | 'CANCELLED';

export type AiPermissionLevel = 'SUGGEST_ONLY' | 'NEEDS_CONFIRMATION' | 'AUTO_WITHIN_LIMITS';

export interface Vehicle {
  id: ID;
  brand: string;
  model: string;
  year: number;
  category: string;
  plateNumber: string;
  branch: string;
  status: VehicleStatus;
  dailyPrice: number;
  weeklyPrice: number;
  monthlyPrice: number;
  mileage: number;
  image: string;
}

export interface Booking {
  id: ID;
  bookingNumber: string;
  customerName: string;
  vehicleId: ID;
  status: BookingStatus;
  pickupAt: string;
  returnAt: string;
  totalAmount: number;
  paymentStatus: 'PENDING' | 'PAID' | 'FAILED' | 'REFUNDED';
}

export interface Contract {
  id: ID;
  contractNumber: string;
  bookingId: ID;
  customerName: string;
  vehicleId: ID;
  status: ContractStatus;
  startAt: string;
  endAt: string;
  balance: number;
}
