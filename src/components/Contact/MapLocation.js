// components/contact/MapLocation.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -3.745, // Замените на широту вашего офиса
  lng: -38.523 // Замените на долготу вашего офиса
};

export default function MapLocation() {
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"> {/* Замените на ваш Google Maps API ключ */}
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/* Маркер для местоположения офиса */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}
