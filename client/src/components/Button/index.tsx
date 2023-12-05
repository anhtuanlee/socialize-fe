import Link from "next/link";
import classnames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classnames.bind(styles);

export default function Button({ href, onClick, type, title, Icon, classname, children }: TButton) {
	let Comp: any = "button";
	let props: TPropsDataButton = {};
	if (href) {
		Comp = Link;
		props.href = href;
	} else {
		props.onClick = onClick;
	}
	return (
		<Comp className={cx(type, classname)} {...props}>
			{Icon && <Icon />}
			{type !== "icon" && <p>{title}</p>}
			{children}
		</Comp>
	);
}
