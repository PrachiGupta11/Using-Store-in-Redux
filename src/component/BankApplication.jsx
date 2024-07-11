import { useDispatch,useSelector } from 'react-redux';
import {withdrawalAmount} from '../redux/action';
import './BankApplication.css';
function BankApplication() {
  const balance=useSelector((state)=>state.balance);
  const dispatch=useDispatch();

  const handleWithdraw=(amount)=>{
    dispatch(withdrawalAmount(amount));
  }
  return (
    <>
      <div id="div1">
        <div id="circle">
         
        </div>
        <label>Hello, Janny!</label>
        <div id="totalAmount">
          ${balance.toLocaleString()} <br/>
          <span>Total Amount</span>
        </div>
        <div className='btn-container'>
           <div className='text10000'>Clicking this button decreases the total amount by 10,000 above </div>
            <div>
              <button onClick={()=>handleWithdraw(10000)} className='btn'>
                WITHDRAW $10,000</button>
              <button onClick={()=>handleWithdraw(5000)} className='btn'>
                WITHDRAW $5,000</button>
            </div>
         </div>
      </div>
     
    </>
  )
}
export default BankApplication;
