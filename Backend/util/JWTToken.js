//Creating Token and Save in Cookie

const sendToken = (user, statusCode, res) => {
    const token = user.getJWTToken();

    //Options For Cookies
    const options = {
        expire: new Date(
            Date.now() + process.env.COOKIE_EXPIRE *24*3600*1000
        ),
        httpOnly: true
    }

    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        user,
        token
    })
}


module.exports = sendToken