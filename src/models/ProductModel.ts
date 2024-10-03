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
  color: VariantColor[];
  capacity: VariantCapacity[];
}

export interface ProductDocument extends Document {
  productName: string;
  category: string;
  productDesc: string;
  productPrev: string;
  fixedPrice: number;
  variants: Variant;
}

const variantSchema = new Schema({
  color: [
    {
      name: { type: String, required: true },
      hexCode: { type: String, required: true },
      priceAdded: { type: Number, default: 0 },
    },
  ],
  capacity: [
    {
      type: { type: String, required: true },
      priceAdded: { type: Number, default: 0 },
    },
  ],
});

const productSchema = new Schema<ProductDocument>({
  productName: { type: String, required: true },
  category: { type: String, required: true },
  productDesc: { type: String, required: true },
  productPrev: { type: String, required: true },
  fixedPrice: { type: Number, required: true },
  variants: variantSchema,
});

const Product = mongoose.model<ProductDocument>('Product', productSchema);

export default Product;
