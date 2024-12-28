import { Request, Response } from 'express';
import { CartDetailsService } from '../service/carts_details.service';

const cartDetailsService = new CartDetailsService();

export class CartDetailsController {
  async getAllCartDetails(req: Request, res: Response): Promise<void> {
    try {
      const cartDetails = await cartDetailsService.getAllCartDetails();
      res.status(200).json({
        data: cartDetails,
        length: cartDetails.length,
        message: 'Get all cart details successfully',
      });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async createCartDetails(req: Request, res: Response): Promise<void> {
    try {
      const body = req.body;
      const cartDetails = await cartDetailsService.createCartDetails(body);
      res.status(201).json({
        data: cartDetails,
        message: 'Create cart details successfully',
      });
    } catch (error: any) {
      res
        .status(500)
        .json({ message: error.message || 'Internal server error' });
    }
  }

  async getCartDetailsById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const cartDetails = await cartDetailsService.getCartDetailsById(id);
      res.status(200).json({
        data: cartDetails,
        message: 'Get cart details by ID successfully',
      });
    } catch (error: any) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async deleteCartDetailsById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const cartDetails = await cartDetailsService.deleteCartDetailsById(id);
      res.status(200).json({
        data: cartDetails,
        message: 'Delete cart details successfully',
      });
    } catch (error: any) {
      res
        .status(500)
        .json({ message: error.message || 'Internal server error' });
    }
  }

  async updateCartDetailsById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const dataCartDetails = req.body;
      const cartDetails = await cartDetailsService.updateCartDetailsById(
        id,
        dataCartDetails,
      );
      res.status(200).json({
        data: cartDetails,
        message: 'Update cart details successfully',
      });
    } catch (error: any) {
      res
        .status(500)
        .json({ message: error.message || 'Internal server error' });
    }
  }
}
