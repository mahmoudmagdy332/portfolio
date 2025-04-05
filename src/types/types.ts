export type AuthInitialState = {
  isResetSuccessful: boolean;
  isVerifySuccessful: boolean;
  token: string | null;
};



export type Profile = {
  fname:string|null;
  lname:string|null;
  name: string;
  email: string;
  phone: string;
  image: string;
  fcm_token: string | null; 
 


}
export type profileInitialState={
  Profile:Profile|null
}




export type langInitialState={
  lang: string;
  translations: { [key: string]: string };
  languageLoading: boolean;
}

// types/types.ts
// export type Notification = {
//   id: number;
//   employee_id: number;
//   seen: number;
//   notifiable_type: string;
//   notifiable_id: number;
//   created_at: string;
//   updated_at: string;
//   admin_notification_id: number | null;
//   title: string;
//   body: string;
// };

// export type NotifyInitialState={
//   Notifications: Notification[]; 
//   Active:boolean
//   last_page:number
//   current_page:number
// }


export type Term={
  id: number,
  created_at:string,
  updated_at: string,
  title: string,
  content: string,
}

export type sloders=  {
  id: number,
  image:string
}

export type slide = {
  id: number;
  image: string;
  title: string;
  description: string;
};




export type setting={
  id: number,
  app_name: string,
  location: string,
  phone: string,
  email:string,
  home_meta_title: string,
  home_meta_description: string,
  home_meta_keywords: string,
  home_meta_image: string,
  logo: string,
  footer_logo: setting,
  linkedin: string;
  facebook: string;
  twitter: string;
  instagram: string;
  vimeo: string;
  google: string;
  address: string;
  tax:number
  bank_account:string
}

export type page={
  
  id: number,
  title: string
  content:string,
  image:string
}
export type childs={
  id: number,
  name: string
  image:string

}
export type category={
  id: number,
  name: string
  image:string,
  childs:childs[]

}




export type settingInitialState={
  setting:setting|null
  categories:category[]|null
  pages:page[]|null
  sloders:sloders[]|null,
  intros:slide[]|null,
  menuCategories:category[]|null
}

export type pageInitialState={
  page:page|null

}


export  type ProductCategory = {
    id: number;
    created_at: string;
    updated_at: string;
    name: string;
  };
  

 export type ProductImage = {
    id: number;
    product_id: number;
    image: string;
    created_at: string;
    updated_at: string;
  };
  export type Size = {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
  };
  export type Color = {
    id: number;
    product_id: number;
    color_code: string;
    color:{
      name:string;
    }|null;
    created_at: string;
    updated_at: string;
    image: string; 
  };
  type PricingTier = {
    id: number;
    product_id: number;
    from: number; 
    to: number;   
    price: number;
    created_at: string;
    updated_at: string;
  };
  interface Client {
    id: number;
    fname: string | null;
    lname: string | null;
    email: string;
    phone: string | null;
    image: string;
    fcm_token: string | null;
    status: string;
    created_at: string;
    updated_at: string;
    status_string: string;
  }
  
 export interface Review {
    id: number;
    product_id: number;
    client_id: number;
    rate: number;
    comment: string;
    created_at: string;
    updated_at: string;
    client: Client;
  }
  
export type Product = {
  id: number;
  image: string;
  created_at: string;
  updated_at: string;
  colors_count: number;
  sizes_count: number;
  pieces_count: number;
  name: string;
  description: string;
  category:ProductCategory
  photos?:ProductImage[]
  sizes?: Size[];
  pivot_colors?: Color[];
  pieces?: PricingTier[]; 
  hover_image:string,
  rates:Review[]
  avg_rate:number


};

export  type Category = {
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
  products:Product[]|null
};
export  type country = {
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
};
export  type city = {
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
  country_id:string
  shipping: number|0,

};
export  type area = {
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
  country_id:string
  city_id: string,
};


export type SingleCategory={
  Products:Product[]|null
  current_page:number,last_page:number,search:string|undefined
}
export type homeInitialState={
  home:Category[]|null
}

export type ProductInitialState={
  Product:Product|null
}


export type SizeQuantity= {
  size_id: number;
  quantity: number;
}

export type ColorData= {
  color_id: number;
  sizes: SizeQuantity[];
}

export type ProductState= {
  selectedData: {
    product_id: number;
    colors: ColorData[];
  };
  activeColorId: number | null;
  isDrawerOpen: boolean;
  selectedSize: string | null;
}
export interface CartItem {
  product:Product
  selectedProduct: {
    product_id: number;
    colors: ColorData[];
  };}

export type CartState={
  items: CartItem[];
  isDrawerOpen:boolean
}


export type newColor={
  color_id: number; color_image: string; sizes: { size_id: number; size_name: string; quantity: number; price: number; 
}[]}

export type newSize={
  size_id: number; size_name: string; quantity: number; price: number;
}




export type CountryInitialState={
  countries:country[]|null

}
export type CityInitialState={
  cities:city[]|null

}
export type AreaInitialState={
  areas:area[]|null

}

export type Addresses={
  id: number;
  client_id: number;
  name: string;
  address: string;
  is_default: 0 | 1; 
  country_id: number;
  city_id: number;
  area_id: number;
  building: string;
  floor: string;
  apartment: string;
  note: string;

}
export type AddressesInitialState={
  Addresses:Addresses[]|null

}

export type AddressDetails={
  id: number;
  client_id: number;
  name: string;
  address: string;
  is_default: 0 | 1; 
  country: country;
  city: city;
  area: area;
  building: string;
  floor: string;
  apartment: string;
  note: string;

}

export type AddressInitialState={
  Address:AddressDetails|null

}


export type Section = {
  id: number;
  image: string;
  created_at: string;
  updated_at: string;
  title: string;
  description: string;
};
export  type SectionInitialState={
  Section:Section[]|null

}

export enum OrderStatus {
  Pending = "0",
  Processing = "1",
  Completed = "2",
  Canceled = "3",
}

export enum PaymentMethod {
  Cash = "0",
  visa = "1",
}
interface BIllCategory {
  id: number;
  created_at: string;
  updated_at: string;
  image: string;
  name: string;
}

// Size Type
interface BillSize {
  id: number;
  name: string;
  quantity: number;
}

// Color Type
interface BilColor {
  id: number;
  color_code: string;
  image: string;
  sizes: BillSize[];
}

interface Piece {
  id: number;
  product_id: number;
  from: number;
  to: number;
  price: number;
  created_at: string;
  updated_at: string;
}

interface BillProduct {
  id: number;
  name: string;
  description: string;
  image: string;
  category: BIllCategory;
  colors: BilColor[];
  price: number;
  piece: Piece;
}


export interface Order {
  id: number;
  code: string;
  status: OrderStatus;
  total: number;
  payment_method: PaymentMethod;
  address:Addresses
  city:city
  area:area
  country:country
  client:Profile
  payment_method_text: string,
  status_text:string,
  status_color:string,
  products:BillProduct[]
  created_at:string,
  shipping:number
  coupon_value:number

}

export  type OrderInitialState={
  Order:Order|null
}

export type order={
  id: number;
  client_id: number;
  address_id: number;
  total: number;
  status: string;
  payment_method: string;
  created_at: string;
  updated_at: string;
  code: string;
  status_text: string;
  payment_method_text: string;
  status_color: string;
}
export type AllOrdersInitialState={
  Orders:order[]|null
  current_page:number,last_page:number
}

export type Coupon= {
  id: number;
  code: string;
  type: string; 
  amount: number;
  limit: number;
  remaining: number;
  expire_date: string;
  status: string; 
  created_at: string;
  updated_at: string; 
  status_text: string;
  type_text: string;
}

export type CouponInitialState={
  Coupon:Coupon|null
}
export type BLogCategory={
  id: number,
  name: string

}

export type BlogPost = {
  id: number;
  image: string;
  created_at: string; 
  updated_at: string
  blog_category_id: number;
  title: string;
  content: string;
  category:BLogCategory
};

export type BLogInitialState ={
  search:string|undefined
  blogs:BlogPost[]|null
  current_page:number,last_page:number,categories:BLogCategory[]|null,category_id:number|undefined,singleBlog:BlogPost|null

}

 