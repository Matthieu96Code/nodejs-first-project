// @desc Get all contacts
// @route GET /api/contacts
// @access public
const getContacts = async (req, res) => {
    res.status(200).json({ message: "Get all contacts" });
};

// @desc Create New contact
// @route POST /api/contacts
// @access public
const createContact = async (req, res) => {
    console.log("The request bbody is:", req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }
    res.status(201).json({ message: "Create Contact" });
};

// @desc Get contact
// @route GET /api/contacts/:id
// @access public
const getContact = async(req, res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id}` })
};

// @desc Update contact
// @route PUT /api/contacts/:id
// @access public
const updateContact = async (req, res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}` })
};

// @desc Delete contact
// @route DELETE /api/contacts/:id
// @access public
const deleteContact = async (req, res) => {
    res.status(200).json({ message: `Delete contact for ${req.params.id}` })
};

module.exports = { 
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact,
}; 