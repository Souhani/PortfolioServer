import { Form } from "../models/form.model.js";

export const newForm = async (req, res) => {
   const {name, email, subject, message} = req.body;
   try {
    const formDoc = await Form.create({name, email, subject, message});
    res.json({
      success: true,
      message: 'Message sent successfully.'
    })
   } catch (err) {
    res.json({
      success: false,
      message: "Failed to send message."
    })
   }
}