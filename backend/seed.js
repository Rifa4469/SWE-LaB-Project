import mongoose from 'mongoose';
import Vehicle from './models/Vehicle.js'


const MONGO_URI = 'mongodb://127.0.0.1:27017/goride';

const vehicles = [
  {
    vehicleName: 'Tesla Model 3',
    owner: 'Elon Rentals',
    category: 'Electric',
    pricePerDay: 120,
    location: 'Dhaka, Banani',
    availability: 'Available',
    description: 'Fully electric sedan with autopilot features.',
    coverImage: 'https://images.unsplash.com/photo-1704340142770-b52988e5b6eb?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    userEmail: 'tesla@rent.com'
  },
  {
    vehicleName: 'Toyota Corolla',
    owner: 'City Cars',
    category: 'Sedan',
    pricePerDay: 55,
    location: 'Dhaka, Dhanmondi',
    availability: 'Available',
    description: 'Fuel-efficient and reliable daily commute car.',
    coverImage: 'https://images.unsplash.com/photo-1704340142770-b52988e5b6eb?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    userEmail: 'citycars@rent.com'
  },
  {
    vehicleName: 'Toyota HiAce',
    owner: 'Travel Pro',
    category: 'Van',
    pricePerDay: 95,
    location: 'Dhaka, Uttara',
    availability: 'Available',
    description: 'Spacious van suitable for group travel.',
    coverImage: 'https://images.unsplash.com/photo-1704340142770-b52988e5b6eb?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    userEmail: 'travelpro@rent.com'
  },
  {
    vehicleName: 'Honda CR-V',
    owner: 'Premium Drive',
    category: 'SUV',
    pricePerDay: 90,
    location: 'Dhaka, Gulshan',
    availability: 'Available',
    description: 'Comfortable SUV with excellent safety features.',
    coverImage: 'https://images.unsplash.com/photo-1704340142770-b52988e5b6eb?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    userEmail: 'premium@rent.com'
  }
];

async function seedVehicles() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected');

    await Vehicle.deleteMany();
    await Vehicle.insertMany(vehicles);

    console.log('Vehicle data seeded successfully');
    process.exit();
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
}

seedVehicles();
