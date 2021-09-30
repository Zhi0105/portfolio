document.addEventListener(`DOMContentLoaded`, () => {

    const fname = document.querySelector(`#fname`)
    const lname = document.querySelector(`#lname`)
    const email = document.querySelector(`#email`)
    const gender = document.querySelector(`#gender`)

    let info = []

    class data{
        
        constructor(fname, lname, email, gender){
            this.firstname = fname
            this.lastname = lname
            this.email = email
            this.gender = gender
        }
        createData(){
            insertData(this.firstname, this.lastname, this.email, this.gender)
        }
    
    }

    const insertData = (fname, lname, email, gender) => {

        let Obj = {
            firstname: fname,
            lastname: lname,
            email: email,
            gender: gender
        }
        
        info.push(Obj)
        displayInfo()

    }

    const displayInfo = () => {
        const data = document.querySelector(`#data`)
        let tr = document.createElement('tr')
        
        info.forEach(e => {
            tr.innerHTML = 
            `
                <td>${e.firstname}</td>
                <td>${e.lastname}</td>
                <td>${e.email}</td>
                <td>${e.gender}</td>
                <td><a href="javascript:void(0)" class="btn btn-danger" id="close">&times;</a></td> 
            `
            data.append(tr)
        })

        DeleteInfo()
    }
    

    //DELETE
    const DeleteInfo = () => {
            
        // document.querySelector(`#data`).addEventListener(`click`, (e) => {
        //     e.preventDefault()    
        //     if(confirm(`Want to delete this task?`) == true ){
        //         e.target.parentElement.parentElement.remove()
        //     }

        // })
            document.querySelector(`.form-table`).addEventListener(`click`, (e) => {
                let data_del = e.target.id == 'close'
                
                if(data_del){
                    e.target.parentElement.parentElement.remove()
                }
            })
    }


    //INSERT
    document.querySelector(`.user-validate`).addEventListener(`submit`, (e) => {
        e.preventDefault()
        if(gender.value != '...'){
            
            const tao = new data(fname.value, lname.value, email.value, gender.value)
            tao.createData()

            fname.value = ''
            lname.value = ''
            email.value = ''
            gender.value = '...'
        } else {
            alert(`Fill up all fields!`)
        }

    })
    
})