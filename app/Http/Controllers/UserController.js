import User from "../../Models/User.js"

export const getUser = async (req, res) => {
    try {
        const user = await User.findAll();
        const result = {
            status: true,
            content: user
        }
        res.send(result);
    } catch (err) {
        console.log(err);
    }
}

// export default { getUser };