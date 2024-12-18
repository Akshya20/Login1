import { useState } from "react"




function Home1() {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [loading, setloading] = useState(false);
    const [message, setmessage] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === "user" && password === "password") {
            localStorage.setItem("username", username);
            setloading(true);
        }else {
            setmessage(true);
        }
    }

    return (
        <div>

            {!message ? (
                <h2>Login Page</h2>
            ) : (
                <>
                 <h2>Login Page</h2>
                 <p>Invalid username or password</p>
                </>
               
            )}
            {!loading ? (
                <>
                    <form  onSubmit={handleLogin}>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setusername(e.target.value)}
                        required></input>
                    <label>Password:</label>
                    <input type="text"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        required>
                        </input>

                    <button type="submit">Submit</button>
                    </form>


                </>
            ) : (
                <p>Welcome, {localStorage.getItem("username")}</p>

            )}
        </div>
    );

};

export default Home1;
