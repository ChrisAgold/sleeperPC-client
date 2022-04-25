import {FormRow, Alert} from '../../components'
import {useAppContext} from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage'

const AddPost = () => {
    const {
        isLoading,
        isEditing,
        showAlert,
        displayAlert,
        title,
        description,
        postLocation,
        type,
        typeOptions,
        handleChange,
        createPost,
    } = useAppContext()

    const handleSubmit = e => {
        e.preventDefault()
        if (!title || !description || !postLocation) {
            displayAlert()
            return
        }
        if(isEditing) {
            return
        }
        createPost()
    }

    const handlePostInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        handleChange({name, value})
    }


    return (
        <Wrapper>
            <form>
                <h3>{isEditing ? 'edit post' : 'add post'}</h3>
                {showAlert && <Alert/>}
                <div>
                    {/* title */}
                    <FormRow
                        type="text"
                        name="title"
                        value={title}
                        handleChange={handlePostInput}
                    />
                    {/* description */}
                    <FormRow
                        type="text"
                        name="description"
                        value={description}
                        handleChange={handlePostInput}
                    />
                    {/* postLocation */}
                    <FormRow
                        type="text"
                        labelText='location'
                        name="postLocation"
                        value={postLocation}
                        handleChange={handlePostInput}
                    />
                    {/* title */}
                    {/* description */}
                    <div>
                        <button type='submit'
                                onClick={handleSubmit}
                                disabled={isLoading}
                        >
                            submit
                        </button>
                    </div>
                </div>
            </form>
        </Wrapper>
    )
}

export default AddPost
