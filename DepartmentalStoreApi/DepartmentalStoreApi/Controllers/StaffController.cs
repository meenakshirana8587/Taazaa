using AutoMapper;
using DepartmentalStoreApi.Entities;
using DepartmentalStoreApi.Infrastucture;
using DepartmentalStoreApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DepartmentalStoreApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StaffController: ControllerBase
    {
        private readonly DeptStoreContext _context;

        private readonly IMapper _mapper;

        public StaffController(DeptStoreContext context , IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
            
        }
        
        [HttpGet]
        public List<StaffModel> GetStaff()
        {
            
            var query = _context.Staff.Include(a=> a.Address).Include(r=>r.Role);
            var result = query.ToList();
            

            List<StaffModel> models = _mapper.Map<List<StaffModel>>(result);
            
            return models;
        }

        [HttpGet("member")]
        public List<StaffModel> GetStaffByName(string name)
        {
            var result = _context.Staff.Where(s=> s.Firstname==name).Include(a=>a.Address).Include(r=>r.Role);
            List<StaffModel> models = _mapper.Map<List<StaffModel>>(result);

            return models;
        }

        [HttpGet("memberbyrole")]
        public List<StaffModel> GetStaffByRole(string role)
        {
            
            var result = _context.Staff.Where(s => s.Role.RoleName == role).Include(a => a.Address).Include(r => r.Role);
            List<StaffModel> models = _mapper.Map<List<StaffModel>>(result);

            return models;
        }

        [HttpGet("memberbynameandphone")]
        public List<StaffModel> GetStaffByPhone(string name, string phone)
        {
            var result = _context.Staff.Where(s => s.Firstname == name && s.Phone.Contains(phone)).Include(a => a.Address).Include(r => r.Role);
            List<StaffModel> models = _mapper.Map<List<StaffModel>>(result);

            return models;
        }





        [HttpGet("{id}")]
        
        public List<Staff> getStaff()
        {
            var res = from r in _context.Staff select r;
            return res.ToList();
        }

        [HttpPost]
        public Staff createStaff(Staff staff)
        {
            _context.Staff.Add(staff);
            _context.SaveChanges();
            return staff;
        }


        [HttpPut("{id}")]
        public Staff updateItems(Staff staff)
        {

            _context.Entry(staff).State = EntityState.Modified;
            _context.SaveChanges();
            return staff;

        }

        [HttpDelete("{id}")]
        public Staff DeleteStaff(long id)
        {
            var staff =  _context.Staff.Find(id);
            

            _context.Staff.Remove(staff);
             _context.SaveChangesAsync();

            return staff;
        }

    }
}
