export const Footer = () => {
  return (
    <div className="footer-parent-div">
      <div className="footer-child-div">
        <h1> My Shoes </h1>{" "}
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          <br /> Vero, asperiores facere? Molestias impedit fuga placeat dolor
          architecto! <br /> Cum impedit eum asperiores, eaque ipsum magni
          aperiam saepe officiis laborum? <br /> Delectus, accusantium.
        </span>
        <div className="icons">
          <a href="https://github.com/vishalsoni7" target="_blank">
            <i className="fa-brands fa-github font_awsome_logo" />{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/vishal-soni-b21a4a1b8"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin font_awsome_logo" />{" "}
          </a>
          <a href="https://www.instagram.com/vishaallsoni/" target="_blank">
            <i className="fa-brands fa-instagram font_awsome_logo" />
          </a>
          <a href="https://twitter.com/Vishsoni7" target="_blank">
            <i className="fa-brands fa-twitter font_awsome_logo" />
          </a>
        </div>
      </div>

      <div className="table-div">
        <table className="table">
          <thead>
            <tr>
              <th>Services</th>
              <th>My Account</th>
              <th>Contact Info</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Home</td>
              <td>My Contact</td>
              <td>505, 2nd-eye, SG Road, Gandhinagar</td>
            </tr>
            <tr>
              <td>About Us</td>
              <td>Contact</td>
              <td>+91 97832 19697</td>
            </tr>
            <tr>
              <td>Services</td>
              <td>Shopping Cart</td>
              <td>vishsoni043@gmail.com</td>
            </tr>
            <tr>
              <td>Blogs</td>
              <td>Shop</td>
              <td>
                <a href="https://vishalsoni.netlify.app/">
                  https://vishalsoni.netlify.app/
                </a>
              </td>
            </tr>
            <tr>
              <td>Contact Us</td>
              <td>Services Login</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
