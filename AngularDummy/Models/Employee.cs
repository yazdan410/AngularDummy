using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using NPoco;

namespace AngularDummy.Models
{
    [TableName("tblEmployees")]
    [PrimaryKey("Id")]
    public class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Gender { get; set; }
        public string Salary { get; set; }

    }
}