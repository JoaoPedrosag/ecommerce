import { User } from '../entities/User.js'

class UserRepository {

    async create({ name, email, password, admin, shop_name }) {
        const user = new User({ name, email, password, admin, shop_name });

        return await user.save();
    }

    async list() {
        const users = await User.find({});
        return users;
    }

    async findByEmail(email) {
        const user = User.findOne({ email });
        return user;
    }

    async findById(id) {
        const user = await User.findById(id).exec();
        return user;
    }

    async findByIdAndUpdate(id, { name, email, password, admin, shop_name }) {
        const user = await User.findByIdAndUpdate(id, { name, email, password, admin, shop_name });
        return user
    }

    async findByIdAndRemove(id) {
        const user = await User.findByIdAndRemove(id);
        return user
    }
}

export { UserRepository };