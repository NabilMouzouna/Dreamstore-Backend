import mongoose, { Document, Schema } from 'mongoose';

interface VariantColor {
  name: string;
  hexCode: string;
  priceAdded: number;
}

interface VariantCapacity {
  type: string;
  priceAdded: number;
}

interface Variant {
  color?: VariantColor[]; // Changed to optional
  capacity?: VariantCapacity[]; // Changed to optional
}

export interface ProductDocument extends Document {
  productName: string;
  category: string;
  productDesc: string;
  productPrev: string;
  fixedPrice: number;
  variants?: Variant; // Changed to optional
}

const variantColorSchema = new Schema<VariantColor>({
  name: { type: String, required: false }, // Set required to false
  hexCode: { type: String, required: false }, // Set required to false
  priceAdded: { type: Number, default: 0 },
});

const variantCapacitySchema = new Schema<VariantCapacity>({
  type: { type: String, required: false }, // Set required to false
  priceAdded: { type: Number, default: 0 },
});

const variantSchema = new Schema<Variant>({
  color: [variantColorSchema], // Use the new schema
  capacity: [variantCapacitySchema], // Use the new schema
});

const productSchema = new Schema<ProductDocument>({
  productName: { type: String, required: true },
  category: { type: String, required: true },
  productDesc: { type: String, required: true },
  productPrev: { type: String, required: true },
  fixedPrice: { type: Number, required: true },
  variants: { type: variantSchema, required: false }, // Set required to false
});

const Product = mongoose.model<ProductDocument>('Product', productSchema);

export default Product;