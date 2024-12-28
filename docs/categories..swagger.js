/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: Các thao tác liên quan đến danh mục
 */
/**
 * @swagger
 * /api/v1/categories:
 *      get:
 *          tags: [Categories]
 *          summary: Lấy tất cả danh mục
 *          responses:
 *              200:
 *                  description: Lấy ra tất cả danh mục thành công
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/ICategories'
 *              500:
 *                  description: Lỗi khi lấy tất cả danh mục
 */
/**
 * @swagger
 * /api/v1/categories/{id}:
 *      get:
 *           tags: [Categories]
 *           summary: Lấy chi tiết danh mục
 *           parameters:
 *               - in: path
 *                 name: id
 *                 required: true
 *                 schema: 
 *                     type: string
 *           responses:
 *               200:
 *                   description: Lấy ra chi tiết danh mục thành công
 *               400:
 *                   description: Lỗi khi lấy danh mục 
 *               500:
 *                   description: Lỗi không có mạng
 */
/**
 *  @swagger
 * /api/v1/categories/{id}:
 *  delete:
 *      tags: [Categories]
 *      summary: Xóa một danh mục
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema: 
 *                type: string
 *      responses:
 *          200:
 *              description: Xóa danh mục thành công
 *          400:
 *              description: Lỗi xóa danh mục
 *          500:
 *              description: Lỗi không có mạng
 */
/**
 *  @swagger
 *  /api/v1/categories:
 *  post:
 *      tags: [Categories]
 *      summary: Thêm một danh mục
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/createCategories'
 *      responses:
 *          200:
 *              description: Thêm danh mục thành công
 *          400:
 *              description: Lỗi thêm danh mục
 *          500:
 *              description: Lỗi không có mạng
 */
/**
 *  @swagger
 *  /api/v1/categories/{id}:
 *    patch:
 *      tags: [Categories]
 *      summary: Cập nhật một danh mục
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
 *              $ref: '#/components/schemas/ICategories'
 *      responses:
 *        200:
 *          description: Cập nhật danh mục thành công
 *        400:
 *          description: Lỗi cập nhật danh mục
 *        500:
 *          description: Lỗi không có mạng
 */
/**
 * @swagger
 * components:
 *  schemas: 
 *    ICategories:
 *      type: object
 *      properties:
 *          _id:
 *              type: string
 *              description: ID của danh mục
 *              example: category0000000
 *          name:
 *              type: string
 *              description: Tên của danh mục
 *              example: Đồ ăn
 *          createAt:
 *              type: string
 *              format: date-time
 *              description: Thời gian tạo danh mục
 *              example: 2023-10-01T12:00:00Z
 *          updateAt:
 *              type: string
 *              format: date-time
 *              description: Thời gian cập nhật danh mục
 *              example: 2023-10-01T12:00:00Z
 *      required:
 *          - name
 *          
 *    createCategories:
 *      type: object
 *      properties:
 *          name:
 *              type: string
 *              description: Tên của danh mục
 *              example: Đồ ăn
 *          createAt:
 *              type: string
 *              format: date-time
 *              description: Thời gian tạo danh mục
 *              example: 2023-10-01T12:00:00Z
 *          updateAt:
 *              type: string
 *              format: date-time
 *              description: Thời gian cập nhật danh mục
 *              example: 2023-10-01T12:00:00Z
 *      required:
 *          - name
 */