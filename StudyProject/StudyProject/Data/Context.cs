using Microsoft.EntityFrameworkCore;
using StudyProject.Models;
namespace StudyProject.Data

{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options) { }
        public DbSet<Usuarios> Usuarios   { get; set; }
    }
}
