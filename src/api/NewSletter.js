export const NewSletter = (name, email) => ({
    method: 'post',
    url: 'newsletter/',
    data: {
        name: name,
        email: email
    }
});