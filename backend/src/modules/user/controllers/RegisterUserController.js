class RegisterUserController {
    registerUserService

    constructor(registerUserService) {
        this.registerUserService = registerUserService;
    }

    async handle(request, response) {
        const { name, email, password, admin, shop_name } = request.body;
        const user = await this.registerUserService.execute({ name, email, password, admin, shop_name });

        return response.status(201).json(user);
    }
}

export { RegisterUserController };
