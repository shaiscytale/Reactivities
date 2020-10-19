using System;
using System.Net;

namespace Application.Errors
{
  public class RestException : Exception
  {
    private readonly HttpStatusCode _code;
    public HttpStatusCode Code => _code;
    private readonly object _errors;
    public object Errors => _errors;
    public RestException(HttpStatusCode code, object errors = null)
    {
      _errors = errors;
      _code = code;
    }
  }
}