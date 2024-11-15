/* Check if User is Admin */
async function adminOnly(req, res, next) {
  console.log("admin-only: " + req.roles)
  if (req.roles.includes('admin')) {
    next()
  } else {
    res.status(403)
    res.json({ error: 'Admins Only' })
  }
}

export default adminOnly
