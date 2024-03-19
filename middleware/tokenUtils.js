export const verifyJWT = (token) => {
	const decoded = jwt.verify(token, process.env.JWT_SECRET);
	return decoded;
};
export default tokenUtils;
