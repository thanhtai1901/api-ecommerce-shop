/**
 * @swagger
 * tags:
 *   name: Comments
 *   description: Các thao tác liên quan đến bình luận
 */
/**
 * @swagger
 * /api/v1/comments:
 *   post:
 *     tags: [Comments]
 *     summary: Thêm một bình luận
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateComments'
 *     responses:
 *       200:
 *         description: Thêm bình luận thành công
 *       400:
 *         description: Lỗi khi thêm bình luận
 *       500:
 *         description: Lỗi không có mạng
 */
/**
 * @swagger
 * /api/v1/comments:
 *   get:
 *     tags: [Comments]
 *     summary: Lấy tất cả bình luận
 *     responses:
 *       200:
 *         description: Lấy ra tất cả bình luận thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/IComments'
 *       500:
 *         description: Lỗi khi lấy tất cả bình luận
 */
/**
 * @swagger
 * /api/v1/comments/{id}:
 *   get:
 *     tags: [Comments]
 *     summary: Lấy chi tiết bình luận
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lấy bình luận thành công
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/IComments'
 *       400:
 *         description: Lỗi khi lấy bình luận
 *       500:
 *         description: Lỗi không có mạng
 *   delete:
 *     tags: [Comments]
 *     summary: Xóa một bình luận
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Xóa bình luận thành công
 *       400:
 *         description: Lỗi xóa bình luận
 *       500:
 *         description: Lỗi không có mạng
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     IComments:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Tên của người bình luận
 *           example: "Nguyễn Văn A"
 *         content:
 *           type: string
 *           description: Nội dung bình luận
 *           example: "Món ăn này rất ngon!"
 *         images:
 *           type: array
 *           items:
 *             type: string
 *           description: Danh sách hình ảnh kèm theo bình luận
 *           example: ["http://example.com/image1.jpg", "http://example.com/image2.jpg"]
 *         menu_id:
 *           type: string
 *           description: ID của thực đơn mà bình luận thuộc về
 *           example: "menu0000000"
 *         createAt:
 *           type: string
 *           format: date-time
 *           description: Thời gian tạo bình luận
 *           example: "2023-12-15T14:00:00Z"
 *         updateAt:
 *           type: string
 *           format: date-time
 *           description: Thời gian cập nhật bình luận
 *           example: "2023-12-15T14:30:00Z"
 *         timestamp:
 *           type: integer
 *           description: Thời gian (timestamp) khi bình luận được tạo
 *           example: 1702630200000
 *       required:
 *         - name
 *         - content
 *         - menu_id
 *         - timestamp
 * 
 *     CreateComments:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Tên của người bình luận
 *           example: "Nguyễn Văn A"
 *         content:
 *           type: string
 *           description: Nội dung bình luận
 *           example: "Món ăn này rất ngon!"
 *         images:
 *           type: array
 *           items:
 *             type: string
 *           description: Danh sách hình ảnh kèm theo bình luận
 *           example: ["http://example.com/image1.jpg", "http://example.com/image2.jpg"]
 *         menu_id:
 *           type: string
 *           description: ID của thực đơn mà bình luận thuộc về
 *           example: "menu0000000"
 *         user_id:
 *           type: string
 *           description: ID của người dùng
 *           example: "users00123456789"
 *         createAt:
 *           type: string
 *           format: date-time
 *           description: Thời gian tạo bình luận
 *           example: "2023-12-15T14:00:00Z"
 *         updateAt:
 *           type: string
 *           format: date-time
 *           description: Thời gian cập nhật bình luận
 *           example: "2023-12-15T14:30:00Z"
 *         timestamp:
 *           type: integer
 *           description: Thời gian (timestamp) khi bình luận được tạo
 *           example: 1702630200000
 *       required:
 *         - name
 *         - content
 *         - menu_id
 *         - timestamp
 */