/**
 * @swagger
 * tags:
 *   name: Blogs
 *   description: Các thao tác liên quan đến blog
 */
/**
 * @swagger
 * /api/v1/blogs:
 *      get:
 *          tags: [Blogs]
 *          summary: Lấy tất cả blog
 *          responses:
 *              200:
 *                  description: Lấy ra tất cả blog thành công
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Iblog'
 *              500:
 *                  description: Lỗi khi lấy tất cả blog
 */
/**
 * @swagger
 * /api/v1/blogs/{id}:
 *      get:
 *           tags: [Blogs]
 *           summary: Lấy chi tiết blog
 *           parameters:
 *               - in: path
 *                 name: id
 *                 required: true
 *                 schema: 
 *                     type: string
 *           responses:
 *               200:
 *                   description: Lấy ra chi tiết blog thành công
 *               400:
 *                   description: Lỗi khi lấy blog 
 *               500:
 *                   description: Lỗi không có mạng
 */
/**
 *  @swagger
 * /api/v1/blogs/{id}:
 *  delete:
 *      tags: [Blogs]
 *      summary: Xóa một blog
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema: 
 *                type: string
 *      responses:
 *          200:
 *              description: Xóa blog thành công
 *          400:
 *              description: Lỗi xóa blog
 *          500:
 *              description: Lỗi không có mạng
 */
/**
 *  @swagger
 *  /api/v1/blogs:
 *  post:
 *      tags: [Blogs]
 *      summary: Thêm một blog
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/createBlog'
 *      responses:
 *          201:
 *              description: Thêm blog thành công
 *          400:
 *              description: Lỗi thêm blog
 *          500:
 *              description: Lỗi không có mạng
 */
/**
 *  @swagger
 *  /api/v1/blogs/{id}:
 *    patch:
 *      tags: [Blogs]
 *      summary: Cập nhật một blog
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
 *              $ref: '#/components/schemas/Iblog'
 *      responses:
 *        200:
 *          description: Cập nhật blog thành công
 *        400:
 *          description: Lỗi cập nhật blog
 *        500:
 *          description: Lỗi không có mạng
 */
/**
 * @swagger
 * components:
 *  schemas: 
 *    Iblog:
 *      type: object
 *      properties:
 *          _id:
 *              type: string
 *              description: ID của blog
 *              example: blog0000000
 *          name:
 *              type: string
 *              description: Tên của blog
 *              example: Hành trình khám phá Việt Nam
 *          content:
 *              type: string
 *              description: Nội dung của blog
 *              example: Đây là một bài viết về hành trình khám phá Việt Nam.
 *          users_id:
 *              type: string
 *              format: objectId
 *              description: ID của người dùng tạo blog
 *              example: user0000000
 *          images:
 *              type: string
 *              description: Đường dẫn đến hình ảnh của blog
 *              example: http://example.com/image.jpg
 *          createAt:
 *              type: string
 *              format: date-time
 *              description: Thời gian tạo blog
 *              example: 2023-10-01T12:00:00Z
 *          updateAt:
 *              type: string
 *              format: date-time
 *              description: Thời gian cập nhật blog
 *              example: 2023-10-01T12:00:00Z
 *      required:
 *          - name
 *          - content
 *          - users_id
 *          
 *    createBlog:
 *      type: object
 *      properties:
 *          name:
 *              type: string
 *              description: Tên của blog
 *              example: Hành trình khám phá Việt Nam
 *          content:
 *              type: string
 *              description: Nội dung của blog
 *              example: Đây là một bài viết về hành trình khám phá Việt Nam.
 *          users_id:
 *              type: string
 *              format: objectId
 *              description: ID của người dùng tạo blog
 *              example: user0000000
 *          images:
 *              type: string
 *              description: Đường dẫn đến hình ảnh của blog
 *              example: http://example.com/image.jpg
 *          createAt:
 *              type: string
 *              format: date-time
 *              description: Thời gian tạo blog
 *              example: 2023-10-01T12:00:00Z
 *          updateAt:
 *              type: string
 *              format: date-time
 *              description: Thời gian cập nhật blog
 *              example: 2023-10-01T12:00:00Z
 *      required:
 *          - name
 *          - content
 *          - users_id
 */