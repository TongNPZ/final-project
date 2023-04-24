import './register.css';

const Register = (props) => {
  return (
  
    <div>
        <form>
      <div className=''>
        <div className=''>
          <label>ชื่อ-นามสกุล</label>
          <input type="text" id="username" name="username" required/>
        </div>
        <div className=''>
          <label>เลขบัตรประจำตัวประชาชน</label>
          <input type='text' required/>
        </div>  
        <div className=''>
          <label>ที่อยู่</label>
          <input type='text' required/>
        </div>  
        <div className=''>
          <label>เบอร์โทรศัพท์</label>
          <input type='text' required/>
        </div>
        <div className=''>
          <label for='email'>อีเมล</label>
          <input type="email" id="email" name="email" required/>
        </div>
        <div className=''>  
          <label>รหัสผ่าน</label>
          <input type="password" id="password" name="password" required/>
        </div>
    
      </div>

      <div className=''>
        <button type="submit" value="Register" required>สมัครสมาชิกddd</button>
      </div>


    </form>

    </div>
  );
}



export default Register;
