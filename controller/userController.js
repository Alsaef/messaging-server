const user = require('../model/user')

module.exports.createUser = async (req, res) => {
   try {
      const userPost = req.body;
      const exit = await user.findOne({ email: userPost.email })

      if (exit) {
         return res.status(400).json({ message: 'User already exists' });
      }
      const newUser = new user(userPost);
      const result = await newUser.save();
      res.status(200).json(result)
   } catch (error) {
      console.log(`error${error}`);
      res.status(400).json(`error${error}`)
   }
}

module.exports.getOnUser = async (req, res) => {
   try {
      const email = req.params.email
      const result = await user.findOne({ email: email });
      if (result?.email) {
         return res.status(200).json({
            status: true,
            data: result
         })
      }
      return res.json({ status: false })
   } catch (error) {
      console.log(`error${error}`);
      res.status(400).json(`error${error}`)
   }
}

module.exports.getAllUser = async (req, res) => {

   try {

      const { searchQuery } = req.query;
      const filter = {
         $or: [
            { name: { $regex: searchQuery, $options: 'i' } }, // Case-insensitive name search
            { location: { $regex: searchQuery, $options: 'i' } }, // Case-insensitive location search
         ],
      };
      if (searchQuery) {
         const result = await user.find(filter);
         return res.status(200).json(result)
      }
      else {
         const result = await user.find({});
        return res.status(200).json(result)
      }
   } catch (error) {
      console.log(`error${error}`);
      res.status(400).json(`error${error}`)
   }
}
module.exports.getID = async (req, res) => {
   try {
      const id = req.params.id
      const result = await user.findOne({ _id: id });
      res.status(200).json(result)
   } catch (error) {
      console.log(`error${error}`);
      res.status(400).json(`error${error}`)
   }
}

module.exports.updateUser = async (req, res) => {
   try {
      const updateUserData = req.body
      const id = req.params.id

      const updated = await user.updateOne({ _id: id }, { $set: updateUserData })

      res.status(200).json({ message: 'User updated successfully', updated });
   } catch (error) {
      res.status(500).json({ message: 'Error updating user', error });
   }
}

module.exports.statusChange = async (req, res) => {
   const id = req.params.id;
   const userStatus = await user.findOne({ _id: id });

   if (!userStatus) {
      return res.status(400).json("Internal Error")
   }
   res.status(200).json({ status: userStatus.status })
}