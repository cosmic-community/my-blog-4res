export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface MenuCategory extends CosmicObject {
  type: 'menu-categories';
  metadata: {
    name?: string;
    description?: string;
    display_order?: number;
  };
}

export interface MenuItem extends CosmicObject {
  type: 'menu-items';
  metadata: {
    name?: string;
    description?: string;
    price?: number;
    image?: {
      url: string;
      imgix_url: string;
    };
    category?: MenuCategory;
    dietary_tags?: string[];
    available?: boolean;
  };
}

export interface Location extends CosmicObject {
  type: 'locations';
  metadata: {
    location_name?: string;
    address?: string;
    phone?: string;
    email?: string;
    hours?: string;
    map_url?: string;
    photo?: {
      url: string;
      imgix_url: string;
    };
  };
}

export interface ReservationInfo extends CosmicObject {
  type: 'reservation-info';
  metadata: {
    headline?: string;
    description?: string;
    reservation_phone?: string;
    reservation_email?: string;
    booking_url?: string;
    max_party_size?: number;
    policies?: string;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
}