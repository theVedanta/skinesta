import React from "react";
import BottomNavigationItem from "./BottomNavigationItem";
import { Video, Home, Calendar, ShoppingBag, User } from "react-feather";

const Container = ({ children }) => {
	return (
		<>
			<div className="container">{children}</div>

			<div className="bottomNavigation">
				<ul>
					<BottomNavigationItem
						icon={<Video className="icon" />}
						path="/consult"
					/>
					<BottomNavigationItem
						icon={<Calendar className="icon" />}
						path="/schedule"
					/>
					<BottomNavigationItem
						icon={<Home className="icon" />}
						path="/"
					/>
					<BottomNavigationItem
						icon={<ShoppingBag className="icon" />}
						path="/shop"
					/>
					<BottomNavigationItem
						icon={<User className="icon" />}
						path="/profile"
					/>
				</ul>
			</div>
		</>
	);
};

export default Container;
