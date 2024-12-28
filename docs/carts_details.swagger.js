/**
 * @swagger
 * tags:
 *   name: CartDetails
 *   description: Các thao tác liên quan đến chi tiết giỏ hàng
 */
/**
 * @swagger
 * /api/v1/cart-details:
 *      get:
 *          tags: [CartDetails]
 *          summary: Lấy tất cả chi tiết giỏ hàng
 *          responses:
 *              200:
 *                  description: Lấy ra tất cả chi tiết giỏ hàng thành công
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/CartDetail'
 *              500:
 *                  description: Lỗi khi lấy tất cả chi tiết giỏ hàng
 */
/**
 * @swagger
 * /api/v1/cart-details/{id}:
 *      get:
 *           tags: [CartDetails]
 *           summary: Lấy chi tiết một giỏ hàng
 *           parameters:
 *               - in: path
 *                 name: id
 *                 required: true
 *                 schema: 
 *                     type: string
 *           responses:
 *               200:
 *                   description: Lấy ra chi tiết giỏ hàng thành công
 *               400:
 *                   description: Lỗi khi lấy chi tiết giỏ hàng 
 *               500:
 *                   description: Lỗi không có mạng
 */
/**
 *  @swagger
 * /api/v1/cart-details/{id}:
 *  delete:
 *      tags: [CartDetails]
 *      summary: Xóa một chi tiết giỏ hàng
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema: 
 *                type: string
 *      responses:
 *          200:
 *              description: Xóa chi tiết giỏ hàng thành công
 *          400:
 *              description: Lỗi xóa chi tiết giỏ hàng
 *          500:
 *              description: Lỗi không có mạng
 */
/**
 *  @swagger
 *  /api/v1/cart-details:
 *  post:
 *      tags: [CartDetails]
 *      summary: Thêm một chi tiết giỏ hàng
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/CreateCartDetail'
 *      responses:
 *          200:
 *              description: Thêm chi tiết giỏ hàng thành công
 *          400:
 *              description: Lỗi thêm chi tiết giỏ hàng
 *          500:
 *              description: Lỗi không có mạng
 */
/**
 *  @swagger
 *  /api/v1/cart-details/{id}:
 *    patch:
 *      tags: [CartDetails]
 *      summary: Cập nhật một chi tiết giỏ hàng
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema: 
 *            type: string
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CartDetail'
 *      responses:
 *        200:
 *          description: Cập nhật chi tiết giỏ hàng thành công
 *        400:
 *          description: Lỗi cập nhật chi tiết giỏ hàng
 *        500:
 *          description: Lỗi không có mạng
 */
/**
 * @swagger
 * components:
 *  schemas: 
 *    CartDetail:
 *      type: object
 *      properties:
 *          _id:
 *              type: string
 *              description: ID của chi tiết giỏ hàng
 *              example: cartDetail0000000
 *          cart_id:
 *              type: string
 *              description: ID của giỏ hàng
 *              example: cart0000000
 *          menu_id:
 *              type: string
 *              description: ID của món ăn
 *              example: menu0000000
 *          quantity:
 *              type: number
 *              description: Số lượng món ăn
 *              example: 2
 *          createdAt:
 *              type: string
 *              format: date-time
 *              description: Thời gian tạo chi tiết giỏ hàng
 *              example: 2023-10-01T12:00:00Z
 *          updatedAt:
 *              type: string
 *              format: date-time
 *              description: Thời gian cập nhật chi tiết giỏ hàng
 *              example: 2023-10-01T12:00:00Z
 *      required:
 *          - cart_id
 *          - menu_id
 *          - quantity
 *          
 *    CreateCartDetail:
 *      type: object
 *      properties:
 *          cart_id:
 *              type: string
 *              description: ID của giỏ hàng
 *              example: cart0000000
 *          menu_id:
 *              type: string
 *              description: ID của món ăn
 *              example: menu0000000
 *          quantity:
 *              type: number
 *              description: Số lượng món ăn
 *              example: 2
 *      required:
 *          - cart_id
 *          - menu_id
 *          - quantity
 */