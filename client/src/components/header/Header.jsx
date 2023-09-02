import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://www.teahub.io/photos/full/86-869618_clean-lake-mountains-range-trees-nature-wallpaper-nature.jpg"
        alt=""
      />
    </div>
  );
}
