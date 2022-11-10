class LoginUserController {
    loginUserService

    constructor(loginUserService) {
        this.loginUserService = loginUserService;
    }

    async handle(request, response) {
        const { email, password } = request.body;
        const token = await this.loginUserService.execute({ email, password });
        response.set('x-access-token', token);

        return response.status(200).json(token);
    }
}

export { LoginUserController };
