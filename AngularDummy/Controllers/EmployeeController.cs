using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AngularDummy.Models;
using NPoco;

namespace AngularDummy.Controllers
{
    public class EmployeeController : Controller
    {
        // GET: Employee
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult Get_AllEmployee()
        {
            using (IDatabase db = new Database("Primary"))
            {
                List<Employee> Emp = db.Fetch<Employee>("select * from tblEmployees");
                return Json(Emp, JsonRequestBehavior.AllowGet);
            }


           
        }

        //view to add Employee 
        public ActionResult Add()
        {
            return View();
        }

        public string Insert_Employee(Employee Emp)
        {
            if (Emp != null)
            {
                using (IDatabase db = new Database("Primary"))
                {
                 
                    db.Insert(Emp);
                    return "Employee Added Successfully";
                }
            }
            else
            {
                return "Employee Not Inserted! Try Again";
            }
        }


        public string Delete_Employee(Employee Emp)
        {
            if (Emp != null)
            {
                using (IDatabase db = new Database("Primary"))
                {

                    db.Delete(Emp);
                    return "Employee Deleted Successfully";
                }
            }
            else
            {
                return "Employee Not Deleted! Try Again";
            }
        }

        //view to add Employee 
        public ActionResult Update()
        {
            return View();
        }

        public string Update_Employee(Employee Emp)
        {
            if (Emp != null)
            {
                using (IDatabase db = new Database("Primary"))
                {

                    db.Update(Emp);
                    return "Employee Updated Successfully";
                }
            }
            else
            {
                return "Employee Not Updated! Try Again";
            }
        }
    }
}