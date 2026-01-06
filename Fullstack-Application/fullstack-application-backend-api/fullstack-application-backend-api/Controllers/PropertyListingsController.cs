using fullstack_application_backend_api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace fullstack_application_backend_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PropertyListingsController : ControllerBase
    {
        private readonly FullstackApplicationDbContext _dbContext;
        public PropertyListingsController (FullstackApplicationDbContext fullStackApplicationDbContext)
        {
            _dbContext = fullStackApplicationDbContext;
        }
        [HttpGet]
        public async Task<IEnumerable<Propertylisting>> Get()
        {
            var result = await _dbContext.Propertylistings.ToListAsync();
            return result;
        }
    }
}
