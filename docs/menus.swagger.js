/**
 * @swagger
 * tags:
 *   name: Menus
 *   description: Các thao tác liên quan đến thực đơn
 */
/**
 * @swagger
 * /api/v1/menus:
 *      get:
 *          tags: [Menus]
 *          summary: Lấy tất cả thực đơn
 *          responses:
 *              200:
 *                  description: Lấy ra tất cả thực đơn thành công
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Menu'
 *              500:
 *                  description: Lỗi khi lấy tất cả thực đơn
 */
/**
 * @swagger
 * /api/v1/menus/{id}:
 *      get:
 *           tags: [Menus]
 *           summary: Lấy chi tiết thực đơn
 *           parameters:
 *               - in: path
 *                 name: id
 *                 required: true
 *                 schema: 
 *                     type: string
 *           responses:
 *               200:
 *                   description: Lấy ra chi tiết thực đơn thành công
 *               400:
 *                   description: Lỗi khi lấy thực đơn 
 *               500:
 *                   description: Lỗi không có mạng
 */
/**
 *  @swagger
 * /api/v1/menus/{id}:
 *  delete:
 *      tags: [Menus]
 *      summary: Xóa một thực đơn
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema: 
 *                type: string
 *      responses:
 *          200:
 *              description: Xóa thực đơn thành công
 *          400:
 *              description: Lỗi xóa thực đơn
 *          500:
 *              description: Lỗi không có mạng
 */
/**
 *  @swagger
 *  /api/v1/menus:
 *  post:
 *      tags: [Menus]
 *      summary: Thêm một thực đơn
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/createMenu'
 *      responses:
 *          200:
 *              description: Thêm thực đơn thành công
 *          400:
 *              description: Lỗi thêm thực đơn
 *          500:
 *              description: Lỗi không có mạng
 */
/**
 *  @swagger
 *  /api/v1/menus/{id}:
 *    patch:
 *      tags: [Menus]
 *      summary: Cập nhật một thực đơn
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
 *              $ref: '#/components/schemas/Menu'
 *      responses:
 *        200:
 *          description: Cập nhật thực đơn thành công
 *        400:
 *          description: Lỗi cập nhật thực đơn
 *        500:
 *          description: Lỗi không có mạng
 */
/**
 * @swagger
 * components:
 *  schemas: 
 *    Menu:
 *      type: object
 *      properties:
 *          _id:
 *              type: string
 *              description: ID của thực đơn
 *              example: menu0000000
 *          categories_id:
 *              type: string
 *              description: ID của danh mục
 *              example: category0000000
 *          name:
 *              type: string
 *              description: Tên của món ăn
 *              example: Phở bò
 *          desctiption:
 *              type: string
 *              description: Mô tả của món ăn
 *              example: Món phở truyền thống Việt Nam
 *          price:
 *              type: number
 *              format: float
 *              description: Giá gốc của món ăn
 *              example: 50000
 *          price_sale:
 *              type: number
 *              format: float
 *              description: Giá khuyến mãi của món ăn
 *              example: 45000
 *          images:
 *              type: string
 *              description: Đường dẫn đến hình ảnh của món ăn
 *              example: http://example.com/pho.jpg
 *          notes:
 *              type: string
 *              description: Ghi chú về món ăn
 *              example: Có thể thêm gia vị theo yêu cầu
 *          createAt:
 *              type: string
 *              format: date-time
 *              description: Thời gian tạo món ăn
 *              example: 2023-10-01T12:00:00Z
 *          updateAt:
 *              type: string
 *              format: date-time
 *              description: Thời gian cập nhật món ăn
 *              example: 2023-10-01T12:00:00Z
 *      required:
 *          - name
 *          - price
 *          - categories_id
 *          - images
 *          
 *    createMenu:
 *      type: object
 *      properties:
 *          categories_id:
 *              type: string
 *              description: ID của danh mục
 *              example: category0000000
 *          name:
 *              type: string
 *              description: Tên của món ăn
 *              example: Phở bò
 *          desctiption:
 *              type: string
 *              description: Mô tả của món ăn
 *              example: Món phở truyền thống Việt Nam
 *          price:
 *              type: number
 *              format: float
 *              description: Giá gốc của món ăn
 *              example: 50000
 *          price_sale:
 *              type: number
 *              format: float
 *              description: Giá khuyến mãi của món ăn
 *              example: 45000
 *          images:
 *              type: string
 *              description: Đường dẫn đến hình ảnh của món ăn
 *              example: http://example.com/pho.jpg
 *          notes:
 *              type: string
 *              description: Ghi chú về món ăn
 *              example: Có thể thêm gia vị theo yêu cầu
 *      required:
 *          - name
 *          - price
 *          - categories_id
 *          - images
 */