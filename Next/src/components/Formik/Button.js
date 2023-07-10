import { LoadingDashed } from 'react-huge-icons/outline';
import Button from '@/components/Button/Button';

export default function ButtonSubmit({ formik, text }) {
    return (
        <Button
            type='submit'
            className={`${
                formik.isValid ? 'bg-primary' : 'bg-gray-300 cursor-no-drop'
            } text-white w-full sm:w-auto sm:px-[3.9rem]`}
            disabled={!formik.isValid || formik.isSubmitting}>
            {formik.isSubmitting ? <LoadingDashed className='w-6 h-6 animate-spin' /> : text}
        </Button>
    );
}
