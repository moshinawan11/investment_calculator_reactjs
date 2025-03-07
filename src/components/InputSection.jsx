import './InputSection.css'

function InputSection({ form, formHandler }) {

    return (
        <section className="input-section container-fluid m-0 my-4 p-0">
            <div className='row p-5 gap-5 g-0 d-flex justify-content-center'>
                <div className='col-5 d-flex flex-column'>
                    <label htmlFor="initial-inv">INITIAL INVESTMENT</label>
                    <input type="number" name='initialInv' value={form.initialInv} onChange={(e) => formHandler(e)} />
                </div>
                <div className='col-5 d-flex flex-column'>
                    <label htmlFor="annual-inv">ANNUAL INVESTMENT</label>
                    <input type="number" name='annualInv' value={form.annualInv} onChange={(e) => formHandler(e)} />
                </div>
                <div className='col-5 d-flex flex-column'>
                    <label htmlFor="exp-return">EXPECTED RETURN</label>
                    <input type="number" name='expReturn' value={form.expReturn} onChange={(e) => formHandler(e)} />
                </div>
                <div className='col-5 d-flex flex-column'>
                    <label htmlFor="duration">DURATION</label>
                    <input type="number" name='duration' value={form.duration} onChange={(e) => formHandler(e)} />
                </div>
            </div>
            {/* <div>
                <p>{form.initialInv}</p>
                <p>{form.annualInv}</p>
                <p>{form.expReturn}</p>
                <p>{form.duration}</p>
            </div> */}
        </section>
    )
}

export default InputSection;