import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ loggedIn, children }) {
    if (!loggedIn) {
        return <Navigate to={{ pathname: '/' }} />
    }
    return children;
}
