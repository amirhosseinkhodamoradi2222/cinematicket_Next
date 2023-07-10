export default function Button({ children, className, ...other }) {
    return (
        <button
            className={`flex items-center justify-center gap-1 rounded-lg py-2 px-4 ${className}`}
            {...other}>
            {children}
        </button>
    );
}
