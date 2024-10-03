import { Router } from 'express';
import { createProduct, deleteProductById, getAllProducts, getProductById, updateProductById } from '../../controllers/productsControllers';

const router = Router();

router.get('/', getAllProducts);
router.post('/create', createProduct);
router.get('/:id', getProductById);
router.put('/:id', updateProductById);
router.delete('/:id', deleteProductById);

export default router;
