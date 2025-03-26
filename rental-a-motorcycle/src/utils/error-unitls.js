export const getErrorMessage = (err) => {
    switch(err.name){
        case 'ValidationError':
        console.log(Object.values(err.errors)[0].message)
        
        return Object.values(err.errors)[0].message;
    default:
        console.log(err.name);
        
        return err.message;
    }
}