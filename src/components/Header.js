import LogoutButton from "../pages/Logout";

function Header() {
    return (
        <>
            <header className="bg-pink-300 p-4 flex justify-between"> {/* เปลี่ยนพื้นหลังเป็นสีชมพูอ่อน */}
                <h1 className="text-xl font-bold">KSU Computer Engineering</h1> {/* แก้ไข font-blod เป็น font-bold */}
                <div>
                    <LogoutButton />
                </div>
            </header>
        </>
    );
}

export default Header;
